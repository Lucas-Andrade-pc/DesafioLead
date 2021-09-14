import styled from 'styled-components/native'

export const Movies = styled.View`
    flex: 1;
    align-items: flex-start;
    padding: 10px;
    margin-top: 40px;
    
`;


export const Title = styled.Text`
    color: #fff;
    font-size: 15px;
`;
export const ScrollMovies = styled.ScrollView`
    flex: 1;
    margin-top: 20px;
`;
export const ImageMovies = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 2px;
    transform: scale(0.9);
`;

export const TouchButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
`;