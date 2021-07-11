import React from 'react'
import { View, Text } from 'react-native'

export default function BookScreen({route}) {
	const book = route.params.book
	let description = ""
	let image = ""

	if ("description" in book.volumeInfo)
	{   description =  book.volumeInfo.description}
	else {
		description = "Pas de description"
	
	}
    return (
        <View>
            <Text>{book.volumeInfo.title}</Text>
			<Text>{book.volumeInfo.authors}</Text>
			<Text>{description} </Text>

        </View>
    )
}
