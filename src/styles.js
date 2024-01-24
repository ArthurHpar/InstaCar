import { StyleSheet } from "react-native";

const textColor = StyleSheet.create({
  gray50: {
    color: "#f9fafb"
  },
  gray100: {
    color: "#f3f4f6"
  },
  gray200: {
    color: "#e5e7eb"
  },
  gray300: {
    color: "#d1d5db"
  },
  gray400: {
    color: "#9ca3af"
  },
  gray500: {
    color: "#6b7280"
  },
  gray600: {
    color: "#4b5563"
  },
  gray700: {
    color: "#374151"
  },
  gray800: {
    color: "#1f2937"
  },
  gray900: {
    color: "#111827"
  },
  gray950: {
    color: "#030712"
  }
});
const backgroundColor = StyleSheet.create({
  gray50: {
    backgroundColor: "#f9fafb"
  },
  gray100: {
    backgroundColor: "#f3f4f6"
  },
  gray200: {
    backgroundColor: "#e5e7eb"
  },
  gray300: {
    backgroundColor: "#d1d5db"
  },
  gray400: {
    backgroundColor: "#9ca3af"
  },
  gray500: {
    backgroundColor: "#6b7280"
  },
  gray600: {
    backgroundColor: "#4b5563"
  },
  gray700: {
    backgroundColor: "#374151"
  },
  gray800: {
    backgroundColor: "#1f2937"
  },
  gray900: {
    backgroundColor: "#111827"
  },
  gray950: {
    backgroundColor: "#030712"
  },
  blue50: {
    backgroundColor: "#eff6ff"
  },
  blue100: {
    backgroundColor: "#dbeafe"
  },
  blue200: {
    backgroundColor: "#bfdbfe"
  },
  blue300: {
    backgroundColor: "#93c5fd"
  },
  blue400: {
    backgroundColor: "#60a5fa"
  },
  blue500: {
    backgroundColor: "#3b82f6"
  },
  blue600: {
    backgroundColor: "#2563eb"
  },
  blue700: {
    backgroundColor: "#1d4ed8"
  },
  blue800: {
    backgroundColor: "#1e40af"
  },
  blue900: {
    backgroundColor: "#1e3a8a"
  },
  blue950: {
    backgroundColor: "#172554"
  }
});
const position = StyleSheet.create({
  fixed: { position: "fixed" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  sticky: { position: "sticky" }
});
const topRightBottomLeft = StyleSheet.create({
  bottom0: {
    bottom: 0
  },
  insetX0: {
    left: 0,
    right: 0
  }
});
const margin = StyleSheet.create({
  m1: {
    margin: 4
  },
  m2: {
    margin: 8
  }
});
const padding = StyleSheet.create({
  p1: {
    padding: 4
  },
  p2: {
    padding: 8
  },
  py2: {
    paddingTop: 8,
    paddingBottom: 8
  },
  py28: {
    paddingTop: 112,
    paddingBottom: 112
  },
  px16: {
    paddingLeft: 64,
    paddingRight: 64
  },
  px28: {
    paddingLeft: 112,
    paddingRight: 112
  },
});
const width = StyleSheet.create({
  wfull: {
    width: "100%"
  }
});
const height = StyleSheet.create({
  hfull: {
    height: "100%"
  },
  h8: {
    height: 32
  },
  h16: {
    height: 64
  }
});
const borderRadius = StyleSheet.create({
  roundedfull: {
    borderRadius: 9999
  }
});
const display = StyleSheet.create({
  flex: {
    flex: 1
  }
});
const flexDirection = StyleSheet.create({
  flexCol: {
    flexDirection: "column"
  },
  flexRow: {
    flexDirection: "row"
  }
});
const justifyContent = StyleSheet.create({
  justifyBetween: {
    justifyContent: "space-between"
  }
});
const alignItems = StyleSheet.create({
  itemsCenter: {
    alignItems: "center"
  }
});
const teste = StyleSheet.create({
  full: {
    activeTintColor: 'blue',
  }
});

export {
  backgroundColor,
  position,
  topRightBottomLeft,
  width,
  height,
  padding,
  margin,
  borderRadius,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  textColor,
  teste
};
