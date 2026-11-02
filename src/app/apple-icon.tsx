import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#123D32',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '110px',
            height: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Main D Geometry */}
          <div
            style={{
              position: 'absolute',
              width: '90px',
              height: '90px',
              backgroundColor: '#F4F1E9',
              borderTopRightRadius: '45px',
              borderBottomRightRadius: '45px',
            }}
          />
          {/* Inner Negative Space */}
          <div
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              backgroundColor: '#123D32',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
            }}
          />
          {/* Central Red Convergence Core */}
          <div
            style={{
              position: 'absolute',
              width: '18px',
              height: '18px',
              backgroundColor: '#C83B35',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
