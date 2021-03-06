import axios from 'axios';
import { apiUrl } from '@/env';
import {
  ICoinPayment,
  IComment,
  IMsg,
  INotification,
  IReaction,
  IReactions,
  IUserInvite,
} from './interfaces';
import { authHeaders, authHeadersFormData } from './utils';

// NOTE: This is because webpack seems having weird bug when I put too many things in api.ts
export const api2 = {
  async getCoinPayments(token: string) {
    return axios.get<ICoinPayment[]>(`${apiUrl}/api/v1/coin-payments/`, authHeaders(token));
  },
  async getReadNotifications(token: string) {
    return axios.get<INotification[]>(`${apiUrl}/api/v1/notifications/read/`, authHeaders(token));
  },
  async inviteUser(token: string, payload: IUserInvite) {
    return axios.post<IMsg>(`${apiUrl}/api/v1/users/invite`, payload, authHeaders(token));
  },
  async uploadFile(token: string, payload: FormData) {
    return axios.post<IMsg>(`${apiUrl}/api/v1/upload/images/`, payload, authHeadersFormData(token));
  },
  async getChildComments(token: string, commentId: string) {
    return axios.get<IComment[]>(
      `${apiUrl}/api/v1/comments/${commentId}/child-comments/`,
      authHeaders(token)
    );
  },
  async getWsToken(token: string) {
    return axios.post<IMsg>(`${apiUrl}/api/v1/ws/token`, null, authHeaders(token));
  },
  async getReactions(
    token: string,
    objectId: string,
    objectType: 'question' | 'answer' | 'comment' | 'article'
  ) {
    return axios.get<IReactions>(
      `${apiUrl}/api/v1/reactions/${objectType}/${objectId}`,
      authHeaders(token)
    );
  },
  async updateReaction(token: string, payload: IReaction) {
    return axios.put<IReactions>(`${apiUrl}/api/v1/reactions/`, payload, authHeaders(token));
  },
  async uploadFeedback(token: string, payload: FormData) {
    return axios.post<IMsg>(`${apiUrl}/api/v1/feedbacks/`, payload, authHeadersFormData(token));
  },
};
