import { Item } from '../services/model';

export type RootStackParamList = {
    Home: undefined;
    Details: { item: Item };
};