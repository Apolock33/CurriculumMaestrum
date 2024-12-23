import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Animated,
    useAnimatedValue
} from 'react-native';
import Colors from '@/constants/colors';
import { StatusBar } from 'expo-status-bar';
import Input from '@/components/general/input';
import Button from '@/components/general/button';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';
import { auth } from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PopupModal from '@/components/general/popups';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const fadeAnim = useAnimatedValue(0);
    const router = useRouter();

    const rotate = () => {
        Animated.timing(fadeAnim, {
            toValue: 15,
            duration: 4000,
            useNativeDriver: true
        }).start();
    };

    const handleLogin = async () => {
        setLoading(true);
        rotate();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await AsyncStorage.setItem('user', JSON.stringify(userCredential.user));
            updateCurrentUser(auth, userCredential.user);
            setLoading(false);
            router.replace('/(panel)/home/page');
        } catch (error) {
            setLoading(false);
            setIsVisible(true);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar style="dark" />

                <View>
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={styles.logo}
                    />
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

                <Button
                    buttonWidth={300}
                    buttonText={loading && (email && password) ?
                        <Animated.Image
                            source={require('@/assets/icons/loading.png')}
                            style={{
                                width: 20,
                                height: 20,
                                transform: [{ rotate: fadeAnim.interpolate({ inputRange: [0, 3], outputRange: ['0deg', '360deg'] }) }]
                            }}
                        />
                        :
                        "Entrar"}
                    buttonTextColor={Colors.white}
                    clickEvent={() => {
                        if (email && password) {
                            handleLogin();
                        } else {
                            setIsVisible(true);
                        }
                    }}
                    isLoading={loading}
                />

                <View style={styles.divisorContainer}>
                    <View style={styles.line} />
                    <Text style={styles.divisorText}>ou</Text>
                    <View style={styles.line} />
                </View>

                <Button
                    hasIcon
                    buttonWidth={300}
                    buttonText="Entrar com o Google"
                    buttonTextColor={Colors.white}
                    clickEvent={() => console.log({ email, password })}
                    isLoading={loading}
                />

                <TouchableOpacity onPress={() => router.navigate('/(auth)/signUp/page')}>
                    <Text style={styles.newAccountLabel}>Não possui uma conta?
                        <Text style={styles.clickHereLabel}> Clique Aqui</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            {isVisible && (
                <PopupModal
                    type='error'
                    visible={isVisible}
                    title="Erro"
                    message={(email && password) ? "E-mail ou Senha incorretos." : "E-mail e Senha são campos\nobrigatórios."}
                onClose={() => setIsVisible(!isVisible)}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    logo: {
        marginBottom: 50
    },
    divisorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        borderColor: Colors.black,
        borderWidth: 0.5,
        width: '38%'
    },
    divisorText: {
        color: Colors.black,
        fontFamily: 'Arvo-Regular',
        fontSize: 15,
        padding: 5
    },
    newAccountLabel: {
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
