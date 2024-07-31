import { Video } from '../modules/Home/services/model';

export type RootStackParamList = {
    Home: undefined;
    Details: { item: Video };
};