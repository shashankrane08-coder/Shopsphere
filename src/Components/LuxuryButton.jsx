import styled from "styled-components";

function LuxuryButton({
  children,
  onClick,
  className = "",
  secondary = false,
  variant = "hero",
}) {
  return (
    <Wrapper
      className={className}
      $secondary={secondary}
      $variant={variant}
    >
      <div className="luxury-btn-container">
        <button
          onClick={onClick}
          className="luxury-btn"
        >
          {children}
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  .luxury-btn-container {
    position: relative;
    padding: 2px;
    border-radius: 18px;

    background: ${({ $variant, $secondary }) => {

      if ($variant === "categories") {
        return `
          linear-gradient(
            135deg,
            #c9a96e,
            #e4c486,
            #c9a96e
          )
        `;
      }

      if ($secondary) {
        return `
          linear-gradient(
            135deg,
            rgba(224,184,106,.3),
            rgba(246,213,139,.1)
          )
        `;
      }

      return `
        linear-gradient(
          90deg,
          #e0b86a,
          #f6d58b,
          #e0b86a
        )
      `;
    }};

    transition: all .4s ease;
  }

  .luxury-btn-container::before {
    content: "";

    position: absolute;
    inset: 0;

    border-radius: 18px;

    z-index: -1;

    opacity: 0;

    transition: all .5s ease;

    background:
      linear-gradient(
        90deg,
        #e0b86a,
        #f6d58b,
        #e0b86a
      );

    filter: blur(25px);
  }

  .luxury-btn-container:hover::before {
    opacity: 1;
  }

  .luxury-btn {
    border: none;

    cursor: pointer;

    border-radius: 16px;

    padding: 16px 34px;

    font-size: .95rem;

    font-weight: 700;

    letter-spacing: .05em;

    transition: all .35s ease;

    position: relative;

    overflow: hidden;

    ${({ $variant, $secondary }) => {

      if ($variant === "categories") {
        return `
          background: #111111;
          color: #ffffff;
          border: 1px solid #c9a96e;
        `;
      }

      if ($secondary) {
        return `
          background: rgba(10,10,10,.92);
          color: #f5efe4;
          backdrop-filter: blur(20px);
        `;
      }

      return `
        background: #090909;
        color: #f6d58b;
      `;
    }}
  }

  .luxury-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,.35);
  }

  ${({ $variant }) =>
    $variant === "categories" &&
    `
      .luxury-btn:hover {
        background: #c9a96e;
        color: #111111;
      }
    `
  }

  .luxury-btn:active {
    transform: translateY(-1px);
  }

  .luxury-btn::after {
    content: "";

    position: absolute;

    top: 0;
    left: -150%;

    width: 120%;
    height: 100%;

    background:
      linear-gradient(
        120deg,
        transparent,
        rgba(255,255,255,.18),
        transparent
      );

    transition: all .8s ease;
  }

  .luxury-btn:hover::after {
    left: 150%;
  }

`;

export default LuxuryButton;