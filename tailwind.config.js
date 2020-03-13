module.exports = {
  theme: {
    animations: {
      // defaults to {}; the following are examples
      jump: {
        "0%": {
          transform: "translateY(50%)"
        },
        "100%": {
          transform: "translateY(0%)"
        }
      },
      fall: {
        "0%": {
          transform: "translateY(-50%)"
        },
        "100%": {
          transform: "translateY(0%)"
        }
      },
      pulse: {
        from: {
          opacity: 0.3
        },
        to: {
          opacity: 1
        }
      }
    },
    animationDuration: {
      // defaults to these values
      default: "1s",
      "250ms": "250ms",
      "500ms": "500ms",
      "750ms": "750ms",
      "0s": "0s",
      "1s": "1s",
      "2s": "2s"
    },
    animationTimingFunction: {
      // defaults to these values
      default: "ease",
      linear: "linear",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out"
    },
    animationDelay: {
      // defaults to these values
      default: "0s",
      "0s": "0s",
      "1s": "1s",
      "2s": "2s",
      "3s": "3s",
      "4s": "4s",
      "5s": "5s"
    },
    animationIterationCount: {
      // defaults to these values
      default: "infinite",
      once: "1",
      infinite: "infinite"
    },
    animationDirection: {
      // defaults to these values
      default: "normal",
      normal: "normal",
      reverse: "reverse",
      alternate: "alternate",
      "alternate-reverse": "alternate-reverse"
    },
    animationFillMode: {
      // defaults to these values
      default: "none",
      none: "none",
      forwards: "forwards",
      backwards: "backwards",
      both: "both"
    }
  },
  variants: {
    animations: ["responsive"],
    animationDuration: ["responsive"],
    animationTimingFunction: ["responsive"],
    animationDelay: ["responsive"],
    animationIterationCount: ["responsive"],
    animationDirection: ["responsive"],
    animationFillMode: ["responsive"],
    backgroundColor: ["dark", "dark-hover", "dark-group-hover"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
    boxShadow: ["dark"]
  },
  plugins: [
    require("tailwindcss-animations"),
    require("tailwindcss-dark-mode")(),
    require("@tailwindcss/ui")
  ]
};
