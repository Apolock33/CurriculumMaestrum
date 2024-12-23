import { View, Text, StyleSheet, Image, Alert, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import Input from '@/components/general/input';
import Colors from '@/constants/colors';
import Button from '@/components/general/button';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.initialText}>Novo Acesso</Text>
        <Text style={styles.subText}>{`Por favor, digite seus dados abaixo para\nque possamos saber mais sobre você!`}</Text>
      </View>

      <Input
        placeholder="Digite seu E-mail"
        labelText="E-mail"
        labelColor={Colors.black}
        labelSize={15}
        autocapitalize="none"
        autocomplete={'email'}
        inputWidth={300}
        value={email}
        handleChange={(text) => setEmail(text)}
      />

      <Input
        placeholder="Digite sua Senha"
        labelText="Senha"
        labelColor={Colors.black}
        labelSize={15}
        autocapitalize="none"
        autocomplete={'password'}
        inputWidth={300}
        isPassword
        value={password}
        handleChange={(text) => setPassword(text)}
      />

      <Input
        placeholder="Confirme sua Senha"
        labelText="Confirmação de Senha"
        labelColor={Colors.black}
        labelSize={15}
        autocapitalize="none"
        autocomplete={'password'}
        inputWidth={300}
        isPassword
        value={confirmPassword}
        handleChange={(text) => setConfirmPassword(text)}
      />

      <Button
        buttonWidth={300}
        buttonText="Criar Acesso"
        buttonTextColor={Colors.white}
        clickEvent={() => {
          if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas devem ser iguais');
          }
        }}
      />

      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.signUpLabel}>
          Ja possui uma conta?
          <Text style={styles.clickHereLabel}>
            Entre
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  initialText: {
    marginBottom: 20,
    fontFamily: 'Arvo-Regular',
    fontSize: 30,
    textAlign: 'left',
    paddingHorizontal: 10
  },
  subText: {
    marginBottom: 30,
    fontFamily: 'Arvo-Regular',
    fontSize: 15.5,
    textAlign: 'left',
    paddingHorizontal: 10,
    maxWidth: 360,
    wordWrap: 'break-word'
  },
  signUpLabel: {
    fontFamily: 'Arvo-Regular',
    fontSize: 15,
    color: Colors.black
  },
  clickHereLabel: {
    fontFamily: 'Arvo-Bold',
    fontSize: 15,
    color: Colors.black,
    textDecorationLine: 'underline'
  }
});