import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #111;
    
`;

export const ContainerInput = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    
`;
export const Input = styled.TextInput`
    margin-top: 30px;
    /* background-color: #000000; */
    margin-left: 10px;
    font-size: 20px;
    height: 30px;
`;

export const ButtonInput = styled.TouchableOpacity`
    margin-top: 25px;
    width: 20%;
    justify-content: center;
    padding-right: 10px;
    
`;
