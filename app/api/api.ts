import axios, { AxiosResponse } from 'axios';
import { HighlightType } from '../models/highlights.interface';
import { CategoryType } from '../models/category.interface';
import { ActivityType } from '../models/activity.interface';

const instance = axios.create({
	baseURL: 'https://web-dev.dev.kimo.ai/'
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};

export const TourismApi = {
	getHighlights: (): Promise<HighlightType[]> => requests.get('v1/highlights'),
    getCategories: (): Promise<CategoryType[]> => requests.get('v1/categories'),
	getAnActivity: (activity_type: string): Promise<ActivityType> => requests.get(`v1/activities/${activity_type}`),
};