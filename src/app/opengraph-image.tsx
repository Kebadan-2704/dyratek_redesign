import { ImageResponse } from 'next/og';

export const alt = 'DYRATEK — Fast Websites, Apps & Business Automations';
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
        {/* Subtle hairline */}
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
            <span>DYRATEK • DIGITAL STUDIO</span>
          </div>
          <div style={{ display: 'flex' }}>3 FOCUS AREAS • 11 SERVICES</div>
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
            <span>Fast Websites &amp; Apps.</span>
            <span>Built for Business.</span>
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
            We design fast websites, mobile apps, and automated workflows that help your business work better.
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
          <div style={{ display: 'flex' }}>BUILD • AUTOMATE • GROW</div>
          <div style={{ display: 'flex' }}>HTTPS://DYRATEK.COM</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
