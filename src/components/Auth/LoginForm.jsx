import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authUser } from "../../api/authApi";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [usuario, setUsuario] = useState("Sin usuario");
  const { login } = useAuth();

  const loginUser = async (email, password) => {
    const response = await authUser(email, password);
    if (response.data !== null) {
      setUsuario(response.data.name);
      login(response.data);
    }
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validationOnChange: false,
    onSubmit: (data) => {
      loginUser(data.email, data.password);
    },
  });

  return (
    <View className="p-4 space-y-2">
      <Text className="text-center text-2xl font-bold">
        Comunidad {usuario}
      </Text>
      <Text>Inicio de sesión</Text>
      <View className="space-y-3">
        <TextInput
          className="border rounded-lg p-1"
          placeholder="Correo electronico"
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
        ></TextInput>
        <Text className="text-center">{formik.errors.email}</Text>
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
  return { email: "", password: "" };
}

function validationSchema() {
  return {
    email: Yup.string().required("Se requiere usuario"),
    password: Yup.string().required("Se requiere contraseña"),
  };
}
