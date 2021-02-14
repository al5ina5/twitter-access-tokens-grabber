import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function Index() {
    const router = useRouter()

    const [link, setLink] = useState()
    useEffect(() => {
        axios.get('/api/url').then((res) => setLink(res.data))
    }, [])

    return (
        <div className="flex min-h-screen bg-gray-200 p-6 min-w-screen">
            <div className="m-auto bg-white max-w-lg shadow-lg rounded-lg w-full space-y-4 p-12 text-gray-600">
                <p className="space-y-2">
                    <p>
                        This micro-app will help you quickly obtain authentication tokens from Twitter for any account.
                        Useful for creating bot accounts.
                    </p>
                    <p>
                        This app is{' '}
                        <a href="" className="text-blue-600">
                            open-source
                        </a>{' '}
                        does not store any data.
                    </p>
                </p>
                <a className="inline-block text-blue-600" href={link}>
                    Login with Twitter
                </a>
            </div>
        </div>
    )
}
