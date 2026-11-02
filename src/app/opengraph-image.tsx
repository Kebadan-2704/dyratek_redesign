import { ImageResponse } from 'next/og';

export const alt = 'DYRATEK — Digital Experiences. Engineered to Perform.';
export const size = {
  width: 1200,
  height: 630,
};
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
          backgroundColor: '#123D32',
          padding: '70px',
          color: '#F4F1E9',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle architectural hairline */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '70px',
            right: '70px',
            height: '1px',
            display: 'flex',
            backgroundColor: 'rgba(244, 241, 233, 0.2)',
          }}
        />

        {/* Top Header Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '18px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(244, 241, 233, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                display: 'flex',
                backgroundColor: '#C83B35',
                marginRight: '12px',
              }}
            />
            <span>DYRATEK // ARCHITECTURAL FOUNDRY</span>
          </div>
          <div style={{ display: 'flex' }}>3 PILLARS • 11 SERVICES</div>
        </div>

        {/* Main Center Editorial Content */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '60px',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              color: '#F4F1E9',
            }}
          >
            <span>Digital Experiences.</span>
            <span>Engineered to Perform.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '22px',
              color: 'rgba(244, 241, 233, 0.85)',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            High-performance web platforms, cross-platform applications, business automation pipelines, and commercial growth systems.
          </div>
        </div>

        {/* Bottom Colophon Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '30px',
            borderTop: '1px solid rgba(244, 241, 233, 0.2)',
            fontSize: '16px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#A5D6C6',
          }}
        >
          <div style={{ display: 'flex' }}>01 BUILD • 02 AUTOMATE • 03 CREATE &amp; GROW</div>
          <div style={{ display: 'flex' }}>HTTPS://DYRATEK.COM</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
