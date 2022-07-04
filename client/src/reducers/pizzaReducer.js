export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
      case "GET_PIZZAS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_PIZZAS_SUCCESS":
        return {
          pizzas: action.payload,
          loading: false,
        };
      case "GET_PIZZAS_FAIL":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_PIZZAS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_PIZZAS_SUCCESS":
        return {
          success: true,
          loading: false,
        };
      case "ADD_PIZZAS_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getPizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_PIZZABYID_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_PIZZABYID_SUCCESS":
        return {
          pizza: action.payload,
          loading: false,
        };
      case "GET_PIZZABYID_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const updatePizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "UPDATE_PIZZABYID_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "UPDATE_PIZZABYID_SUCCESS":
        return {
          updatesuccess: true,
          updateloading: false,
        };
      case "UPDATE_PIZZABYID_FAIL":
        return {
          updateloading: false,
          updateerror: action.payload,
        };
      default:
        return state;
    }
  };
  import axios from "axios";
  import swal from "sweetalert";
  export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
      const response = await axios.get("/api/pizzas/getAllPizzas");
      // console.log(response.data);
      dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
    }
  };
  
  export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: "ADD_PIZZAS_REQUEST" });
    try {
      await axios.post("/api/pizzas/addpizza", { pizza });
      dispatch({ type: "ADD_PIZZAS_SUCCESS" });
    } catch (err) {
      dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
    }
  };
  
  export const getPizzaById = (pizzaId) => async (dispatch) => {
    dispatch({ type: "GET_PIZZABYID_REQUEST" });
    try {
      const response = await axios.post("/api/pizzas/getpizzabyid", { pizzaId });
      dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
    }
  };
  export const updatePizza = (updatedPizza) => async (dispatch) => {
    dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
    try {
      const response = await axios.post("/api/pizzas/updatepizza", {
        updatedPizza,
      });
      dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
      window.location.href = "/admin/pizzalist";
    } catch (err) {
      dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
    }
  };
  
  export const deletePizza = (pizzaId) => async (dispatch) => {
    try {
      await axios.post("/api/pizzas/deletepizza", { pizzaId });
      swal("Pizza Deleted Succss!", "success");
      window.location.href = "/admin/pizzalist";
      // console.log(res);
    } catch (error) {
      swal("Errro While Deleteing Pizza");
    }
  };
  
  export const filterPizza = (searchkey, category) => async (dispatch) => {
    let filterdPizza;
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
      const res = await axios.get("/api/pizzas/getAllPizzas");
      filterdPizza = res.data.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchkey)
      );
      if (category !== "all") {
        filterdPizza = res.data.filter(
          (pizza) => pizza.category.toLowerCase() === category
        );
      }
      dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
    } catch (error) {
      dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
  };
    