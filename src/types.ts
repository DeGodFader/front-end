declare global {
    interface Window {
      notify: ({ type, message, duration, context }: notifProps) => void
      logout: () => void
    }
    
    interface ObjectConstructor {
      /**
       * Groups members of an iterable according to the return value of the passed callback.
       * @param items An iterable.
       * @param keySelector A callback which will be invoked for each item in items.
       */
      groupBy<K extends PropertyKey, T>(
        items: Iterable<T>,
        keySelector: (item: T, index: number) => K,
      ): Partial<Record<K, T[]>>
    }
}

export {}

type notificationType = "SUCCESS" | "ERROR" | "INFO"

type notifProps = {
  type: notificationType
  message?: string
  duration?: number
  context?: any
}