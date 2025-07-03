import { View, StyleSheet } from "react-native"


interface RecipeStackItemProps {
    index: number,
    children: JSX.Element,
}

const RecipeStackItem = ({index, children}: RecipeStackItemProps) => {

    const style = StyleSheet.create({
        item: {
            ...StyleSheet.absoluteFillObject,
            zIndex: -index,
            flex:1,
        }
    });

    return (
        <View style={style.item}>
            {children }
        </View>
    )
    
}


export default RecipeStackItem;