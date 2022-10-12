import React, { createContext, useContext, useEffect, useReducer } from "react";
import { foodSearch } from "./api";

function reducer(state, action) {
  switch (action.type) {
    case "QUERY": {
      return {
        loading: true,
        query: action.query,
        data: null,
        error: null,
      };
    }
    case "RESET": {
      return {
        loading: false,
        query: null,
        data: null,
        error: null,
      };
    }
    case "LOADING": {
      return {
        loading: true,
        query: null,
        data: null,
        error: null,
      };
    }
    case "SUCCESS": {
      return {
        loading: false,
        query: action.query,
        data: action.data,
        error: null,
      };
    }
    case "ERROR": {
      return {
        loading: false,
        query: null,
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
    query: null,
    data: null,
    error: null,
  });

  // 음식 검색
  useEffect(() => {
    if (state.query) {
      foodSearchHttpHandler(state.query);
    }
  }, [state.query]);

  // food search 핸들러
  const foodSearchHttpHandler = async (query) => {
    // Parameter 설정
    const params = {
      query: query, // 검색 질의어
      sort: "accuracy", // accuracy : 정확도순
      page: 1, // 페이지 번호
      size: 2, // 한 페이지에 보여질 문서 수
    };

    try {
      const { data } = await foodSearch(params); // api 호출
      dispatch({ type: "SUCCESS", query: params.query, data });
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

export function useFoodState() {
  const context = useContext(FoodStateContext);
  if (!context) {
    throw new Error("Cannot find FoodProvider");
  }
  return context;
}

export function useFoodDispatch() {
  const context = useContext(FoodDispatchContext);
  if (!context) {
    throw new Error("Cannot find FoodProvider");
  }
  return context;
}
