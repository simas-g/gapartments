const getProperty = async ({id}) => {
    const property = await fetch(`${process.env.URL}/api/property?id=${id}`)
}

const page = async ({params}) => {
    const id = (await params).property
    const prop= await getProperty({id})
  return (
    <div>{prop?.name}</div>
  )
}

export default page