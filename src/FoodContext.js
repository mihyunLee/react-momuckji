import React, { createContext, useEffect, useReducer } from "react";
// import { useState } from "react";
import { foodSearch } from "./api";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING": {
      return {
        loading: true,
        data: null,
        error: null,
      };
    }
    case "SUCCESS": {
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    }
    case "ERROR": {
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const FoodStateContext = createContext();
const FoodDispatchContext = createContext();

export function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  // const [query, setQuery] = useState("");

  // 음식 검색
  useEffect(() => {
    // if (query.length > 0) {
    //   foodSearchHttpHandler(query);
    // }
    foodSearchHttpHandler();
  }, []);

  // food search 핸들러
  const foodSearchHttpHandler = async (query) => {
    // Parameter 설정
    const params = {
      query: "짜장면", // 검색 질의어
      sort: "accuracy", // accuracy : 정확도순
      page: 1, // 페이지 번호
      size: 1, // 한 페이지에 보여질 문서 수
    };

    try {
      const { data } = await foodSearch(params); // api 호출
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  return (
    <FoodStateContext.Provider value={state}>
      <FoodDispatchContext.Provider value={dispatch}>
        {children}
      </FoodDispatchContext.Provider>
    </FoodStateContext.Provider>
  );
}
