const getProperty = async ({id}) => {
    const data = await fetch(`${process.env.URL}/api/property?id=${id}`)
    const {property} = await data.json();
    return property
  }

const page = async ({params}) => {
    const id = (await params).property
    const prop = await getProperty({id})
  return (
    <div>{prop?.title}</div>
  )
}

export default page