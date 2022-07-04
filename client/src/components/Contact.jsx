import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap'
import {FcPhoneAndroid} from "react-icons/fc";
import { MdMarkAsUnread} from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  return (
    <> 
         <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                <h1>Techinfo Pizza Hut</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempore eaque vero labore amet, rem id sed optio non earum libero quis autem, molestiae inventore. Nemo recusandae quae adipisci, ipsum sit magni quas alias quo odio ad temporibus incidunt nobis. Hic molestiae fugit, sit ipsum ipsam repellat sint similique eveniet eos facilis ea pariatur officia rerum veniam reiciendis accusamus. Velit aut reprehenderit reiciendis voluptatem omnis quod. Veniam voluptates, numquam et qui perspiciatis tempora amet quasi dolorem inventore quidem error quia consequatur repellendus quis illo placeat reprehenderit sint veritatis necessitatibus. Quae natus facilis ea fuga molestias minus doloremque cum possimus quia commodi perspiciatis, harum nostrum molestiae nemo totam autem illum at nihil ipsa. Quasi voluptas voluptatem quibusdam perspiciatis explicabo sunt? Rerum esse eligendi labore porro expedita eaque velit earum, nihil recusandae saepe molestias doloribus quas quibusdam ut quis nobis autem minus natus? Fugit nulla blanditiis nobis est laborum voluptatem aut nam ducimus aliquid autem doloremque corrupti obcaecati, quod dicta delectus ipsa, modi labore saepe a natus! Praesentium earum ex atque nisi eum excepturi nobis, consectetur reiciendis! Nesciunt, ducimus voluptatem molestias, tempore beatae vero necessitatibus atque exercitationem laboriosam velit eaque dolorum, cupiditate omnis. Tempora, numquam cupiditate repellat laborum suscipit animi libero repudiandae!</p>
                <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th className="bg-warning text-center" colSpan={3}>
            --- Contact Details ---
            </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FcPhoneAndroid/></td>
          <td>Phone</td>
          <td>7093721327</td>
        </tr>
        <tr>
          <td><FiPhoneCall className='text-primary'/></td>
          <td>Call </td>
          <td>7093721327</td>
        </tr>
        <tr>
          <td><MdMarkAsUnread className="text-danger"/></td>
          <td>Email</td>
          <td>pizzahut@gmail.com</td>
        </tr>
        </tbody>
    </Table>
      </Col>
      <Col md={6}>
         <Image src="images/farmhouse.jpg"
         style={{ width: "100%", height: "100%"}}/>
    </Col>
            </Row>
         </Container>
    </>
  )
}

export default Contact