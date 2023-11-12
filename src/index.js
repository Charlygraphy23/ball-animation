const lightLampContainer = document.querySelector(".light-lamp-container");
window.gsap.registerPlugin(window.CustomEase);

const createLightLamp = (x = 0, y = 0, zoom = 1) => {
  const div = document.createElement("div");
  div.classList.add("light-lamp");
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.transform = `translate(-50%, -50%) rotate(-45deg) scale(${zoom})`;
  lightLampContainer.append(div);
};

const getPercentage = (value) => {
  return (window.innerWidth * value) / 100;
};

const backgroundLightGroup = [
  [
    {
      x: getPercentage(20),
      y: getPercentage(2)
    },

    {
      x: getPercentage(89),
      y: getPercentage(2)
    },
    {
      x: getPercentage(45),
      y: getPercentage(30)
    },
    {
      x: getPercentage(10),
      y: getPercentage(92)
    }
  ],
  [
    {
      x: getPercentage(12),
      y: getPercentage(12)
    },

    {
      x: getPercentage(52),
      y: getPercentage(42)
    },
    {
      x: getPercentage(75),
      y: getPercentage(60)
    }
  ],
  [
    {
      x: getPercentage(22),
      y: getPercentage(12)
    },

    {
      x: getPercentage(10),
      y: getPercentage(2)
    },

    {
      x: getPercentage(2),
      y: getPercentage(62)
    },
    {
      x: getPercentage(5),
      y: getPercentage(50)
    }
  ],
  [
    {
      x: getPercentage(32),
      y: getPercentage(62)
    },

    {
      x: getPercentage(40),
      y: getPercentage(50)
    },

    {
      x: getPercentage(20),
      y: getPercentage(82)
    },
    {
      x: getPercentage(80),
      y: getPercentage(80)
    }
  ],

  [
    {
      x: getPercentage(12),
      y: getPercentage(12)
    },

    {
      x: getPercentage(74),
      y: getPercentage(20)
    },

    {
      x: getPercentage(85),
      y: getPercentage(62)
    },
    {
      x: getPercentage(50),
      y: getPercentage(50)
    }
  ]
];

const backgroundAnimations = (defaultDelay = 1) => {
  const delay = defaultDelay === 1 ? 8 : 8 + defaultDelay;
  const initial = delay - 6;
  const bgStarsTimeline = window.gsap.timeline();
  bgStarsTimeline
    .fromTo(
      ".light-lamp",
      {
        height: "2px"
      },
      {
        duration: initial,
        ease: "power1.in",
        height: "20px",
        y: 50,
        x: 50
      },
      "base"
    )
    .to(
      ".light-lamp",
      {
        height: "200px",
        duration: 0,
        ease: "none"
      },
      `base+=${initial}`
    )
    .to(
      ".light-lamp",
      {
        y: window.innerHeight + 100,
        x: window.innerHeight + 100,
        duration: 0.2,
        ease: "none"
      },
      `base+=${initial}`
    )
    .to(
      ".light-lamp",
      {
        y: -window.innerHeight,
        x: -window.innerHeight,
        duration: 0,
        ease: "none"
      },
      "base2"
    )
    .to(".light-lamp", {
      y: window.innerHeight + 100,
      x: window.innerHeight + 100,
      duration: 0.2,
      repeat: delay,
      ease: "none"
    })
    .to(".light-lamp", {
      y: -window.innerHeight,
      x: -window.innerHeight,
      duration: 0,
      ease: "none"
    })
    .to(".light-lamp", {
      y: window.innerHeight + 100,
      x: window.innerHeight + 100,
      duration: 0.4,
      ease: "none"
    })
    .to(".light-lamp", {
      y: -window.innerHeight,
      x: -window.innerHeight,
      duration: 0,
      ease: "none"
    })
    .to(
      ".light-lamp",
      {
        y: 0,
        x: 0,
        ease: "expo.out",
        duration: initial
      },
      "end"
    )
    .to(
      ".light-lamp",
      {
        height: "5px",
        ease: "expo.out",
        duration: initial
      },
      `end-=0`
    );
};
const ballAnimations = () => {
  const tl = window.gsap.timeline();
  tl.fromTo(
    ".ball",
    { rotation: 0 },
    { rotation: 90, ease: "none", duration: 2 }
  )
    .fromTo(
      ".ball",
      {
        rotation: 90
      },
      { rotation: 360, ease: "none", duration: 0.8 }
    )
    .fromTo(
      ".ball",
      {
        rotation: 0
      },
      { rotation: 360, ease: "none", duration: 1, repeat: 1 }
    )
    .fromTo(
      ".ball",
      {
        rotation: 0
      },
      { rotation: 30, ease: "expo.out", duration: 3 }
    );

  const shake = window.gsap.timeline();
  shake
    .to(".ball-container", { delay: 2, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: -2, y: -2, duration: 0 })
    .to(".ball-container", { delay: 0.1, x: 2, y: 2, duration: 0 })
    .to(".ball-container", {
      delay: 0.1,
      x: -2,
      y: -2,
      duration: 1,
      ease: "none"
    })
    .to(".ball-container", {
      delay: 0.1,
      x: 2,
      y: 2,
      duration: 1,
      ease: "none"
    });

  const transform = window.gsap.timeline();
  transform
    .fromTo(
      ".hole-wrapper",
      {
        scale: 0
      },
      { delay: 1, scale: 1, ease: "power.in", duration: 0.2 },
      "base"
    )
    .to(
      ".head",
      {
        delay: 0.2,
        scale: 1,
        duration: 1,
        x: -5,
        y: -25,
        rotation: 26,
        ease: "elastic.out(1,0.3)"
      },
      "head"
    )
    .fromTo(
      ".rocket-body",
      {
        x: -30,
        y: -100,
        rotation: 30,
        scale: 0
      },
      {
        scale: 1,
        duration: 1,
        y: -10,
        ease: "elastic.out(1,0.3)"
      },
      "head+=0"
    )
    .to(
      ".rocket-fire",
      {
        duration: 0.4,
        opacity: 1
      },
      "head+=0.7"
    )
    .to(".rocket-fire", {
      skewY: 20
    })
    .to(".rocket-fire", {
      skewY: -20
    })
    .to(".rocket-fire", {
      skewX: 20
    })
    .to(".rocket-fire", {
      skewX: -20
    })
    .to(".rocket-fire", {
      skewY: 20
    })
    .to(".rocket-fire", {
      skewY: -20
    })
    .to(".rocket-fire", {
      skewX: 0
    })
    .to(".rocket-fire", {
      skewX: 0
    })
    .to(
      ".hole-wrapper",
      {
        delay: 0,
        scale: 0,
        duration: 0.2,
        ease: "power.out"
      },
      "-=4.7"
    );

  setTimeout(() => transform.reverse(), 3000);
};

const render = () => {
  backgroundLightGroup.forEach((group, index) => {
    group.forEach((value) => {
      const x = value.x;
      const y = value?.y;
      createLightLamp(x, y, index ? 1 - `0.${index + 3}` : 1);
    });
  });

  setTimeout(() => backgroundAnimations(1));
  setTimeout(() => ballAnimations(1));
};

render();

createLightLamp(400, 200, 1);
