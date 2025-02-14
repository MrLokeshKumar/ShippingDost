import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  TextInput,
  HelperText,
  Portal,
  Modal,
  List,
  Menu,
  Button,
} from "react-native-paper";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface CommonInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: "text" | "dropdown" | "textarea" | "date";
  options?: Option[];
  rules?: object;
  placeholder?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  labelPosition?: "floating" | "outside";
}

export function CommonInput<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  options = [],
  rules = {},
  placeholder = "",
  disabled = false,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  labelPosition = "outside",
}: CommonInputProps<T>) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const renderInput = ({
    field: { value, onChange, onBlur },
    fieldState: { error },
  }: {
    field: { value: any; onChange: (value: any) => void; onBlur: () => void };
    fieldState: { error?: any };
  }) => {
    const inputLabel = labelPosition === "floating" ? label : "";

    switch (type) {
      case "dropdown":
        return (
          <View>
            {labelPosition === "outside" && <Text style={styles.outsideLabel}>{label}</Text>}
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TextInput
                  value={value ? options.find(option => option.value === value)?.label : ""}
                  onFocus={openMenu}
                  label={inputLabel}
                  placeholder={placeholder}
                  disabled={disabled}
                  error={!!error}
                  mode="outlined"
                  style={styles.input}
                  right={<TextInput.Icon icon="menu-down" />}
                />
              }
            >
              {options.map(option => (
                <Menu.Item
                  key={option.value}
                  onPress={() => {
                    onChange(option.value);
                    closeMenu();
                    onBlur(); // Lose focus after selecting an option
                  }}
                  title={option.label}
                />
              ))}
            </Menu>
            {error && (
              <HelperText type="error" visible={true}>
                {error?.message}
              </HelperText>
            )}
          </View>
        );

      case "textarea":
        return (
          <View>
            {labelPosition === "outside" && <Text style={styles.outsideLabel}>{label}</Text>}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label={inputLabel}
              placeholder={placeholder}
              disabled={disabled}
              error={!!error}
              multiline={true}
              numberOfLines={numberOfLines || 4}
              mode="outlined"
              style={styles.textarea}
            />
            {error && (
              <HelperText type="error" visible={true}>
                {error.message}
              </HelperText>
            )}
          </View>
        );

      case "date":
        return (
          <View>
            {labelPosition === "outside" && <Text style={styles.outsideLabel}>{label}</Text>}
            <TextInput
              value={value ? new Date(value).toLocaleDateString() : ""}
              onFocus={() => setShowDatePicker(true)}
              label={inputLabel}
              placeholder={placeholder}
              disabled={disabled}
              error={!!error}
              mode="outlined"
              right={<TextInput.Icon icon="calendar" />}
            />
            {error && (
              <HelperText type="error" visible={true}>
                {error.message}
              </HelperText>
            )}
          </View>
        );

      default:
        return (
          <View>
            {labelPosition === "outside" && <Text style={styles.outsideLabel}>{label}</Text>}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label={inputLabel}
              placeholder={placeholder}
              disabled={disabled}
              error={!!error}
              secureTextEntry={secureTextEntry}
              mode="outlined"
              style={styles.input}
            />
            {error && (
              <HelperText type="error" visible={true}>
                {error.message}
              </HelperText>
            )}
          </View>
        );
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={renderInput}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 4,
  },
  outsideLabel: {
    marginBottom: 4,
    color: "#666",
    fontFamily: "Outfit",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  textarea: {
    marginBottom: 4,
  },
  dropdownButton: {
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
    maxHeight: "80%",
  },
});
