import { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  HelperText,
  Portal,
  Modal,
  List,
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
}: CommonInputProps<T>) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const renderInput = ({
    field: { value, onChange, onBlur },
    fieldState: { error },
  }: {
    field: { value: any; onChange: (value: any) => void; onBlur: () => void };
    fieldState: { error?: any };
  }) => {
    switch (type) {
      case "dropdown":
        return (
          <View>
            <TextInput
              value={
                value ? options.find((opt) => opt.value === value)?.label : ""
              }
              onFocus={() => setShowDropdown(true)}
              label={label}
              placeholder={placeholder}
              disabled={disabled}
              error={!!error}
              mode="outlined"
              right={<TextInput.Icon icon="chevron-down" />}
              style={styles.input}
            />
            <Portal>
              <Modal
                visible={showDropdown}
                onDismiss={() => setShowDropdown(false)}
                contentContainerStyle={styles.modal}
              >
                {options.map((option) => (
                  <List.Item
                    key={option.value}
                    title={option.label}
                    onPress={() => {
                      onChange(option.value);
                      setShowDropdown(false);
                    }}
                  />
                ))}
              </Modal>
            </Portal>
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
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label={label}
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
            <TextInput
              value={value ? new Date(value).toLocaleDateString() : ""}
              onFocus={() => setShowDatePicker(true)}
              label={label}
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
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label={label}
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
