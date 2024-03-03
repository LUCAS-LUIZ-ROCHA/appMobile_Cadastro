import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./CommonStyles";

export default function ProdutoItem(props){
    return (
        <View style={styles.container} id={props.produto.codigo}>
            <Text style={styles.textIten}>
                {props.produto.codigo} - {props.produto.nome}
            </Text>

            <Text style={styles.textIten}>
                Quatidade: {props.produto.quantidade}
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
    
}