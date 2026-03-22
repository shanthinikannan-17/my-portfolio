import Particles from "react-tsparticles";

export default function StarBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        particles: {
          number: { value: 150 },

          size: {
            value: { min: 1, max: 3 }
          },

          move: {
            enable: true,
            speed: 0.2
          },

          opacity: {
            value: { min: 0.3, max: 1 }
          },

          color: {
            value: ["#ffffff", "#a5f3fc", "#c084fc"]
          }
        },

        background: {
          color: "#020617"
        }
      }}
    />
  );
}