import {
  Code,
  HardHat,
  Palette,
  Rocket,
  ShieldCheck,
  TerminalWindow,
} from "@phosphor-icons/react/dist/ssr";

export const servicesMap = {
  development: {
    icon: <TerminalWindow className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  design: {
    icon: <Palette className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  deployment: {
    icon: <Rocket className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  maintenance: {
    icon: <HardHat className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  fullStack: {
    icon: <Code className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  everythingElse: {
    icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
};
