type WallpaperProps = {
  src: string;
  blur?: number;
  darken?: number;
};

export default function Wallpaper({
  src,
  blur = 0,
  darken = 0.2,
}: WallpaperProps) {
  return (
    <div style={styles.container}>
      <img
        src={src}
        style={{
          ...styles.image,
          filter: `blur(${blur}px)`,
        }}
        alt="wallpaper"
      />

      {/* dark overlay for UI readability */}
      <div
        style={{
          ...styles.overlay,
          background: `rgba(0,0,0,${darken})`,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
  },
};
