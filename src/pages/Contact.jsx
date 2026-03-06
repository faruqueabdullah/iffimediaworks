import { useRef, useState } from "react";

export default function ContactPage() {
  const formStart = useRef(Date.now());
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [showToast, setShowToast] = useState(false); // NEW

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // add time spent on form (anti-bot)
    formData.append("formStart", String(formStart.current));

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyVd6Rl_uEZ6-m8Aa05DrQZodoRLhxabwpUnL7I0QXgPQo65DW6fCztOX1U6EwsPRfC/exec",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false)
        throw new Error(data?.error || "Failed to send.");

      setShowToast(true); // SHOW TOAST
      // hide after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      form.reset();
      formStart.current = Date.now(); // reset timer for next submit
    } catch (err) {
      setMsg(` ${err?.message || "Something went wrong."}`); // show error in the toaster
    } finally {
      setLoading(false);
    }
  }
  const inputBase = `w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100`;
  return (
    <div className="relative w-full bg-linear-to-br from-blue-50 via-sky-50 to-purple-50">
      {/* TOASTER */}
      {showToast && (
        <div className="fixed top-10 right-6 z-50 rounded-lg bg-green-600 text-white px-5 py-3 shadow-lg animate-slide-in">
          Message sent successfully
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 gap-10 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-2">
          <div className="rounded-xl p-5 border border-gray-300 flex gap-3 items-center">
            <div className="h-12 w-12 bg-dark rounded-full flex justify-center items-center">
              <i class="fa-regular fa-envelope text-light text-2xl"></i>
            </div>
            <div className="email-info">
              <p>Email</p>
              <p>hello@iffimediaworks.com</p>
            </div>
          </div>
          <div className="rounded-xl p-5 border border-gray-300 flex gap-3 items-center">
            <div className="h-12 w-12 bg-dark rounded-full flex justify-center items-center">
              <i class="fa-solid fa-phone text-light text-2xl font-extralight"></i>
            </div>
            <div className="email-info">
              <p>Phone</p>
              <p>+91 94733 70867</p>
            </div>
          </div>
          <div className="rounded-xl p-5 border border-gray-300 flex gap-3 items-center">
            <div className="h-12 w-12 bg-dark rounded-full flex justify-center items-center">
              <i class="fa-solid fa-location-dot text-light text-2xl font-extralight"></i>
            </div>
            <div className="email-info">
              <p>Office</p>
              <p>1st Floor, Babunia Road, <br /> Siwan, Bihar 841226, India</p>
            </div>
          </div>
          <div className="rounded-xl p-5 border border-gray-300">
            <h2 className="text-lg text-blue">Feedback & Suggestions</h2>
            <p className="text-sm text-dark">
              We value your feedback and are continuously working to improve
              iFFi.
            </p>
          </div>
          <div className="rounded-xl p-5 border border-gray-300">
            <h2 className="text-lg text-blue">Media Inquiries</h2>
            <p className="text-sm text-dark">
              For press-related questions contact us at media@iffimediaworks.com
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto w-full max-w-md rounded-[26px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7">
            <h3 className="text-2xl font-semibold text-slate-900">{`Contact Us`}</h3>
            <p className="mt-1 text-sm text-slate-500">{`You can reach us any time.`}</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {/* Honeypot (bots fill this) */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />
              <input
                type="text"
                name="name"
                required
                placeholder={`${`Full name`}`}
                className={inputBase}
              />

              <input
                type="email"
                name="email"
                placeholder={`${`Your email`}`}
                className={inputBase}
              />

              <div className="grid grid-cols-[88px_1fr] gap-3">
                <input
                  type="text"
                  name="countryCode"
                  defaultValue={`+91`}
                  className={inputBase}
                />
                <input
                  type="tel"
                  name="number"
                  placeholder={`${`Phone number`}`}
                  className={inputBase}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={`${`How can we help?`}`}
                  className={`${inputBase} resize-none`}
                />
                <div className="mt-1 text-right text-xs text-slate-400">
                  0/120
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                {loading ? "Sending..." : "Send message"}
              </button>

              <p className="mx-auto max-w-xs text-center text-[11px] leading-5 text-slate-400">
                {`By contacting us, you agree to our Terms of service`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
