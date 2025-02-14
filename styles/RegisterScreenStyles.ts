import { StyleSheet } from "react-native";
import { spacing, fontSizes } from "../utils/styles";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: spacing.large,
    backgroundColor: "white",
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    marginBottom: spacing.large,
    fontSize: fontSizes.headline,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: spacing.large,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.small,
  },
  uploadText: {
    color: "#666",
  },
  row: {
    flexDirection: "row",
    gap: spacing.medium,
    marginBottom: spacing.large,
  },
  halfWidth: {
    flex: 1,
  },
  verifyLink: {
    textAlign: "right",
    color: "#666",
    textDecorationLine: "underline",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.large,
  },
  button: {
    marginBottom: spacing.medium,
    borderRadius: 25,
    backgroundColor: "#92A8CD",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  loginLink: {
    color: "#666",
    textDecorationLine: "underline",
  },
  firstNameInput: {
    marginBottom: spacing.large,
  },
});
