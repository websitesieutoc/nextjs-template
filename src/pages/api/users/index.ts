import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { createUser, queryUsers } from '@/services/users';
import { HttpMethod } from '@/types';

import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  switch (req.method) {
    case HttpMethod.GET:
      return queryUsers(req, res, session);
    case HttpMethod.POST:
      return createUser(req, res, session);
    case HttpMethod.PUT:
    case HttpMethod.DELETE:
    default:
      res.setHeader('Allow', [HttpMethod.GET, HttpMethod.POST]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
