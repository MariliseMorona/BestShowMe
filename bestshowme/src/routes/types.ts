import { Video } from '../services/model';

export type RootStackParamList = {
    Home: undefined;
    Details: { item: Video };
};