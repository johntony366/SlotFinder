import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const _ = require("lodash");

import styles from "../styles/Home.module.css";
import { RootState } from "../store";
import { getSlots } from "../features/slots/slotsSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading } = useSelector((store: RootState) => store.slots);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getSlots());
  }, []);

  return (
    <div>
      <Head>
        <title>Timetable app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="center relative flex h-screen justify-center bg-slate-200">
          {isLoading && (
            <div
              role="status"
              className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-8 w-8 animate-spin fill-blue-500 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <table
            className={`${
              isLoading && "opacity-10"
            } m-8 table-auto border-spacing-4 rounded-md border-2 border-solid border-gray-400 p-8 text-center`}
          >
            <thead>
              <tr className="col-timings">
                <th style={{ writingMode: "unset" }}>Day of the week</th>
                <th>8:00</th>
                <th>8:10</th>
                <th>8:20</th>
                <th>8:30</th>
                <th>8:40</th>
                <th>8:50</th>
                <th>9:00</th>
                <th>9:10</th>
                <th>9:20</th>
                <th>9:30</th>
                <th>9:40</th>
                <th>9:50</th>
                <th>10:00</th>
                <th>10:10</th>
                <th>10:20</th>
                <th>10:30</th>
                <th>10:40</th>
                <th>10:50</th>
                <th>11:00</th>
                <th>11:10</th>
                <th>11:20</th>
                <th>11:30</th>
                <th>11:40</th>
                <th>11:50</th>
                <th>12:00</th>
                <th>12:10</th>
                <th>12:20</th>
                <th>12:30</th>
                <th>12:40</th>
                <th>12:50</th>
                <th>1:00</th>
                <th>1:10</th>
                <th>1:20</th>
                <th>1:30</th>
                <th>1:40</th>
                <th>1:50</th>
                <th>2:00</th>
                <th>2:10</th>
                <th>2:20</th>
                <th>2:30</th>
                <th>2:40</th>
                <th>2:50</th>
                <th>3:00</th>
                <th>3:10</th>
                <th>3:20</th>
                <th>3:30</th>
                <th>3:40</th>
                <th>3:50</th>
                <th>4:00</th>
                <th>4:10</th>
                <th>4:20</th>
                <th>4:30</th>
                <th>4:40</th>
                <th>4:50</th>
                <th>5:00</th>
                <th>5:10</th>
                <th>5:20</th>
                <th>5:30</th>
                <th>5:40</th>
                <th>5:50</th>
                <th>6:00</th>
                <th>6:10</th>
                <th>6:20</th>
                <th>6:30</th>
                <th>6:40</th>
                <th>6:50</th>
                <th>7:00</th>
                <th>7:10</th>
                <th>7:20</th>
                <th>7:30</th>
                <th>7:40</th>
                <th>7:50</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                {data[0].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Tuesday</td>
                {data[1].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Wednesday</td>
                {data[2].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Thursday</td>
                {data[3].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Friday</td>
                {data[4].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Saturday</td>
                {data[5].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Sunday</td>
                {data[6].map((value, i) => (
                  <td className={value === 0 ? "zero" : "one"} key={i}>
                    {value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
