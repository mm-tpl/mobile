import am1 from '@mmstudio/am000001';
import React from 'react';
import { Button, Text } from 'react-native';

export default function tpl(a: <T>(action: string, ...args: unknown[]) => ((...args: unknown[]) => void), s: (...class_names: string[]) => {}, d: <T>(d: string) => T, mm: am1) {
	return (<>
		<Text>this is page003</Text>
		<Button title='go to pg004' onPress={a('a002')}></Button>
	</>);
}
