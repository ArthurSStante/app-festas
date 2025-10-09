import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

// Definimos as propriedades que nosso botão vai aceitar
interface BotaoProps extends TouchableOpacityProps {
  title: string;
}

export default function Botao({ title, ...rest }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8359E3', // Um roxo elegante
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});