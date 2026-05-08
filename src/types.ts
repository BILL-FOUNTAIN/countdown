/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: number;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const BIRTHDAY_DATE = "2026-07-27T00:00:00";
