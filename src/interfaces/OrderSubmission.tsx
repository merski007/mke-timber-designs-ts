import Product from "./Product";

interface OrderSubmission {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    product: Product,
    comments: string
}

export default OrderSubmission;