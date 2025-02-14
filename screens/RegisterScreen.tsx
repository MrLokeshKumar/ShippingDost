import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Text } from "react-native-paper";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CommonInput } from "../components/common/CommonInput";
import { styles } from "../styles/RegisterScreenStyles";

interface RegistrationForm {
  name: string;
  age: string;
  gender: string;
  mobileNumber: string;
  email: string;
  acceptTerms: boolean;
}

const genderOptions = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Other", value: "other" },
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function RegistrationForm() {
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  );
  const [profileBgColor, setProfileBgColor] = useState(getRandomColor());
  const { control, handleSubmit, setValue, watch } = useForm<RegistrationForm>({
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      mobileNumber: "",
      email: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
  };

  const mobileNumberValidation = {
    required: "Mobile number is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Invalid mobile number. It should be a 10-digit number.",
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Register
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: profileImage }}
            style={[styles.profileImage, { backgroundColor: profileBgColor }]}
          />
          <TouchableOpacity>
            <Text style={styles.uploadText}>Upload Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.firstNameInput}>
          <CommonInput
            control={control}
            name="name"
            label="Enter Name"
            rules={{ required: "Name is required" }}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <CommonInput
              control={control}
              name="age"
              label="Age"
              rules={{ required: "Age is required" }}
            />
          </View>
          <View style={styles.halfWidth}>
            <CommonInput
              control={control}
              name="gender"
              label="Gender"
              type="dropdown"
              options={genderOptions}
              rules={{ required: "Gender is required" }}
            />
          </View>
        </View>

        <View>
          <CommonInput
            control={control}
            name="mobileNumber"
            label="Mobile Number"
            rules={mobileNumberValidation}
            placeholder="+91"
          />
        </View>
        <Text style={styles.verifyLink}>Verify</Text>

        <CommonInput
          control={control}
          name="email"
          label="Email"
          placeholder="Enter Email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />
        <Text style={styles.verifyLink}>Verify</Text>

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <Checkbox.Android
            status={watch("acceptTerms") ? "checked" : "unchecked"}
            onPress={() => setValue("acceptTerms", !watch("acceptTerms"))}
          />
          <Text>Accept the Terms & Conditions</Text>
        </View>

        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={{
            borderRadius: 10,
            paddingVertical: 13,
            paddingHorizontal: 26,
          }}
        >
          Create Account
        </Button>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
