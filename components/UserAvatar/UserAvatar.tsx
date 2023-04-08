import { Avatar } from '@mantine/core'
import { config, create } from 'identity-img'
import { useMemo } from 'react'

type UserAvatarProps = {
  address: string
}

export function UserAvatar({ address }: UserAvatarProps) {
  const userIdentityImage = useMemo(() => {
    config({ rows: 8, cells: 8 })
    const img = address ? create(address, { size: 90 }) : ''
    return img
  }, [address])

  return <Avatar size="md" radius="xl" src={userIdentityImage} />
}
