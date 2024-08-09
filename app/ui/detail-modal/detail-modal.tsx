import React from 'react'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@nextui-org/modal'
import { Button } from '@/app/ui/button/button'
import { UserInfo } from '@/app/ui/detail-modal/user-info'

export const DetailModal = ({
    activeUserId,
    isOpen,
    onOpenChange,
}: {
    activeUserId: number | null
    isOpen: boolean
    onOpenChange: () => void
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop='blur'
            size='xl'
        >
            <ModalContent>
                {(onClose) => {
                    return (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>
                                User Info
                            </ModalHeader>
                            <ModalBody className='scrollbar max-h-[300px] overflow-y-scroll'>
                                {!!activeUserId && (
                                    <UserInfo userId={activeUserId} />
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onClick={onClose}
                                    className='bg-secondary hover:bg-secondary/80'
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )
                }}
            </ModalContent>
        </Modal>
    )
}
