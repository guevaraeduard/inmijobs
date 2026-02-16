import type { UserModel } from '@/models/UserModel';
import { usersMock } from '../../mock/usersMock';

export const getUserData = async (id: string): Promise<UserModel | undefined> => {
	if (id) {
		return usersMock.find(u => u.ID === id) ?? undefined;
	}
	return usersMock[0] ?? undefined;
};