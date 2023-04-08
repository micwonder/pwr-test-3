import { Box, Group, Text, Title } from '@mantine/core'
import React from 'react'

type BrandProps = {
  className?: string
}

export function Brand({ className }: BrandProps) {
  return (
    <Box className={className}>
      <Group position="right">
        <Title
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          })}
          align="center"
        >
          <Text inherit variant="gradient" component="span">
            PWR
          </Text>
          DAO
        </Title>
      </Group>
    </Box>
  )
}
