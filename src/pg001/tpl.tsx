import am1 from '@mmstudio/am000001';
import React from 'react';
import { Button, Text } from 'react-native';

export default function tpl(a: <T>(action: string, ...args: unknown[]) => ((...args: unknown[]) => void), s: (...class_names: string[]) => {}, d: <T>(d: string) => T, mm: am1) {
	return (<>
		<Text>page 001</Text>
		<Button title='goto c001' onPress={a('a002')}></Button>
	</>);
}
