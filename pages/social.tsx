import Head from "next/head";
import { motion } from "framer-motion";
import NextImage from "next/image";
import BottomNav from "../components/BottomNav";
import { restaurant } from "../content/clients/default/restaurant";
import { socials, SocialLink } from "../content/clients/default/socials";

function buildOsmUrl(lat: number, lng: number, zoom: number) {
  const delta = 0.008 / (zoom / 14);
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}

function WhatsAppSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.6-1.49-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.9 2.9 4.61 4.07.65.28 1.15.45 1.55.57.65.2 1.24.17 1.71.1.52-.08 1.6-.65 1.83-1.29.22-.63.22-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" />
      <path d="M16.02 3.2C9.03 3.2 3.35 8.87 3.35 15.87c0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.8-1.79a12.63 12.63 0 006.01 1.53h.01c6.99 0 12.67-5.68 12.67-12.67 0-3.39-1.32-6.57-3.72-8.96A12.58 12.58 0 0016.02 3.2zm0 22.99h-.01a10.5 10.5 0 01-5.35-1.47l-.38-.22-4.03 1.06 1.08-3.93-.24-.4a10.5 10.5 0 01-1.61-5.35c0-5.8 4.72-10.52 10.53-10.52 2.81 0 5.45 1.09 7.43 3.08a10.45 10.45 0 013.08 7.43c0 5.8-4.72 10.52-10.52 10.52z" />
    </svg>
  );
}

function InstagramSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.8A3.95 3.95 0 003.8 7.75v8.5a3.95 3.95 0 003.95 3.95h8.5a3.95 3.95 0 003.95-3.95v-8.5a3.95 3.95 0 00-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 6.85A5.15 5.15 0 1112 17.15 5.15 5.15 0 0112 6.85zm0 1.8A3.35 3.35 0 1012 15.35 3.35 3.35 0 0012 8.65z" />
    </svg>
  );
}

function FacebookSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.79.22-1.33 1.35-1.33h1.44V5.76c-.25-.03-1.1-.1-2.09-.1-2.07 0-3.49 1.26-3.49 3.58v2.03H8.35V14h2.36v7h2.79z" />
    </svg>
  );
}

function TikTokSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.8 3c.26 2.07 1.43 3.45 3.5 3.73v2.34a6.04 6.04 0 01-3.46-1.15v6.2c0 3.12-2.52 5.38-5.58 5.38A5.2 5.2 0 014 14.32c0-2.88 2.28-5.25 5.19-5.25.27 0 .53.03.79.08v2.58a2.7 2.7 0 00-.79-.12c-1.44 0-2.6 1.12-2.6 2.64 0 1.45 1.06 2.66 2.51 2.66 1.38 0 2.4-.84 2.4-2.64V3h2.3z" />
    </svg>
  );
}

const socialMeta: Record<
  SocialLink["platform"],
  { label: string; bg: string; color: string; Icon: () => JSX.Element }
> = {
  whatsapp: {
    label: "WhatsApp",
    bg: "#DC2626",
    color: "#fff",
    Icon: WhatsAppSVG,
  },
  instagram: {
    label: "Instagram",
    bg: "#DC2626",
    color: "#fff",
    Icon: InstagramSVG,
  },
  facebook: {
    label: "Facebook",
    bg: "#DC2626",
    color: "#fff",
    Icon: FacebookSVG,
  },
  tiktok: {
    label: "TikTok",
    bg: "#DC2626",
    color: "#fff",
    Icon: TikTokSVG,
  },
};

const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function SocialPage() {
  const osmUrl = buildOsmUrl(
    restaurant.mapLat,
    restaurant.mapLng,
    restaurant.mapZoom
  );

  return (
    <>
      <Head>
        <title>{`${restaurant.name} - Menu`}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <motion.main
        className="max-w-md mx-auto pb-24 pt-8"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="px-4 mb-3 text-center">
          <h1
            className="font-display leading-none mb-1"
            style={{ fontSize: "3rem", color: "var(--color-text)" }}
          >
            Nos réseaux
          </h1>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            À propos du restaurant.
          </p>
        </div>

        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
        >
          <NextImage
            src="/images/logo.png"
            alt="Restaurant logo"
            width={110}
            height={110}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="px-4 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p
            className="font-semibold text-sm mb-3 text-center"
            style={{ color: "var(--color-primary)" }}
          >
            Notre emplacement
          </p>

          <div
            className="rounded-2xl overflow-hidden shadow-md border relative"
            style={{ borderColor: "var(--color-border)" }}
          >
            <iframe
              src={osmUrl}
              width="100%"
              height="220"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Restaurant location"
            />
            <a
              href={restaurant.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg"
              style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Ouvrir dans Google Maps
            </a>
          </div>
        </motion.div>

        <div className="px-4">
          <p
            className="font-semibold text-sm mb-4 text-center"
            style={{ color: "var(--color-primary)" }}
          >
            Suivez-nous
          </p>

          <div className="grid grid-cols-4 gap-3">
            {socials.map((social, i) => {
              const meta = socialMeta[social.platform];

              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: meta.bg, color: meta.color }}
                  >
                    <meta.Icon />
                  </div>

                  <span
                    className="text-[11px] font-medium text-center leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {meta.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.main>

      <BottomNav />
    </>
  );
}