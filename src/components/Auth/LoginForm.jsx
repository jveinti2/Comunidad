import { View, Text, TextInput, Button, Keyboard } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authUser from "../../api/authApi";

export default function LoginForm() {
  const loginUser = async (username, password) => {
    const response = await authUser(username, password);
    console.log(response);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validationOnChange: false,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <View className="p-4 space-y-2">
      <Text className="text-center text-2xl font-bold">Comunidad</Text>
      <Text>Inicio de sesión</Text>
      <View className="space-y-3">
        <TextInput
          className="border rounded-lg p-1"
          placeholder="Correo electronico"
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        ></TextInput>
        <Text className="text-center">{formik.errors.username}</Text>
        <TextInput
          className="border rounded-lg p-1"
          secureTextEntry={true}
          placeholder="Contraseña"
          autoCapitalize="none"
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        ></TextInput>
        <Text className="text-center">{formik.errors.password}</Text>
      </View>
      <View>
        <Button title="Iniciar sesion" onPress={formik.handleSubmit}></Button>
      </View>
    </View>
  );
}

function initialValues() {
  return { username: "", password: "" };
}

function validationSchema() {
  return {
    username: Yup.string().required("Se requiere usuario"),
    password: Yup.string().required("Se requiere contraseña"),
  };
}
