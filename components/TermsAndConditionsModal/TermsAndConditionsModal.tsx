import { Modal } from '@mantine/core'
import React from 'react'

import Markdown from '@/components/Markdown/Markdown'

import { termsAndConditions } from './termsAndConfitions'

type TermsAndConditionsModalProps = {
  opened: boolean
  onClose: () => void
}

export function TermsAndConditionsModal({ opened, onClose }: TermsAndConditionsModalProps) {
  return (
    <Modal zIndex={1000} size="xl" centered opened={opened} onClose={onClose}>
      <Markdown source={termsAndConditions} />
    </Modal>
  )
}
