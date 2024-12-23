import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Colors from '@/constants/colors';

interface PopupModalProps {
    type: 'error' | 'info' | 'success';
    visible: boolean;
    title: string;
    message: string;
    onClose: () => void; // Função para fechar o modal
}

export default function PopupModal({
    type,
    visible,
    title,
    message,
    onClose,
}: PopupModalProps) {
    const translateY = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        if (visible) {
            Animated.spring(translateY, {
                toValue: 20, // Mostra o popup um pouco abaixo do topo
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(translateY, {
                toValue: -100, // Esconde o popup fora da tela
                useNativeDriver: true,
            }).start(() => {
                // Chama a função `onClose` somente após a animação
                if (!visible) {
                    onClose();
                }
            });
        }
    }, [visible, translateY, onClose]);

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'flex-start',
            zIndex: 1000,
            marginTop: 20,
        },
        content: {
            backgroundColor:
                type === 'error'
                    ? Colors.red
                    : type === 'success'
                    ? Colors.green
                    : Colors.blue,
            flexDirection: 'row',
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
            width: '90%',
        },
        icon: {
            width: 40,
            height: 40,
            marginRight: 10,
        },
        title: {
            fontSize: 18,
            fontFamily: 'Arvo-Bold',
            color: Colors.white,
        },
        message: {
            fontSize: 15,
            fontFamily: 'Arvo-Regular',
            color: Colors.white,
        },
    });

    return visible ? (
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.content,
                        { transform: [{ translateY }] },
                    ]}
                >
                    <Image
                        source={
                            type === 'error'
                                ? require('../../assets/icons/error.png')
                                : type === 'info'
                                ? require('../../assets/icons/info.png')
                                : require('../../assets/icons/success.png')
                        }
                        style={styles.icon}
                    />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.message}>{message}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onClose()}>
                        <Image
                            source={require('../../assets/icons/close.png')}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    ) : null;
}
