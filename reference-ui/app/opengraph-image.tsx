import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 60,
          background: 'linear-gradient(135deg, #040b16 0%, #091429 55%, #1c1240 100%)',
          color: '#eff4ff',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: 'uppercase', color: '#70d6ff' }}>IR Agency</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>
          <div style={{ fontSize: 78, lineHeight: 1, fontWeight: 700 }}>Executive Digital Growth Partner</div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: '#c8d6f5' }}>
            Connected brand, growth, and technology services for measurable business outcomes.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
